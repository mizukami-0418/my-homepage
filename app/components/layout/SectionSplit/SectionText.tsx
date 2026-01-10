import { Box, Typography, Button } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  title: string;
  description?: string[];
  buttonLabel?: string;
  list?: string[];
  actions?: ReactNode;
};

export default function SectionText({
  title,
  description,
  buttonLabel,
  list,
  actions,
}: Props) {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        {title}
      </Typography>

      {description?.map((text, index) => (
        <Typography key={index} mb={2}>
          {text}
        </Typography>
      ))}

      {list && (
        <Box component="ul" sx={{ pl: 2 }}>
          {list.map((item) => (
            <li key={item}>
              <Typography>・{item}</Typography>
            </li>
          ))}
        </Box>
      )}

      {buttonLabel && <Button variant="contained">{buttonLabel}</Button>}
      {actions && <div className="pt-4">{actions}</div>}
    </Box>
  );
}
