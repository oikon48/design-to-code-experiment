import { Stack, Box } from '@mui/material';

interface PaginationDotsProps {
  total: number;
  active: number;
  onChange?: (index: number) => void;
}

export default function PaginationDots({ total, active, onChange }: PaginationDotsProps) {
  return (
    <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
      {Array.from({ length: total }).map((_, index) => (
        <Box
          key={index}
          onClick={() => onChange?.(index)}
          sx={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: index === active ? 'primary.main' : 'grey.300',
            cursor: onChange ? 'pointer' : 'default',
            transition: 'background-color 0.3s',
            '&:hover': onChange ? {
              backgroundColor: index === active ? 'primary.main' : 'grey.400',
            } : {},
          }}
        />
      ))}
    </Stack>
  );
}