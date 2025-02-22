import * as React from 'react';
import Box from '@mui/joy/Box';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import CallMade from '@mui/icons-material/CallMade';
import LinkIcon from '@mui/icons-material/Link';

export default function Links() {
  return (
    <Box sx={{ maxWidth: 360 }}>
      <Typography
        id="heading-demo"
        level="h2"
        fontSize="lg"
        endDecorator={
          <Link
            variant="outlined"
            aria-labelledby="heading-demo"
            href="#heading-demo"
            fontSize="md"
            ml={0.5}
            borderRadius="sm"
          >
            <LinkIcon />
          </Link>
        }
        mb={1}
        sx={{ scrollMarginTop: 100 }}
      >
        Heading
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore{' '}
        <Link href="#heading-demo" endDecorator={<CallMade />}>
          Magna Aliqua
        </Link>
        . Maecenas sed enim ut sem viverra aliquet eget.
      </Typography>
    </Box>
  );
}
