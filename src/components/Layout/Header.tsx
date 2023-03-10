import * as React from "react";
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Stack,
  SvgIcon,
  Tooltip,
  Typography,
  useMediaQuery,
  Container,
} from "@mui/material";
import { alpha } from "@mui/material/styles";

import { SIDE_NAV_WIDTH, TOP_NAV_HEIGHT } from "@/utils/constants";

export interface HeaderProps {
  title?: string;
  leftNavAction?: React.ReactNode;
}

export default function Header(props: HeaderProps) {
  const { title, leftNavAction } = props;

  return (
    <>
      <Box
        component="header"
        sx={{
          backdropFilter: "blur(6px)",
          backgroundColor: (theme) =>
            alpha(theme.palette.background.default, 0.8),
          // position: "sticky",
          position: "fixed",
          left: {
            lg: `${SIDE_NAV_WIDTH}px`,
          },
          top: 0,
          width: {
            xs: '100%',
            lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`,
          },
          // width: "100%",
          zIndex: (theme) => theme.zIndex.appBar,
        }}
      >
        <Container>
          <Stack
            alignItems="center"
            direction="row"
            justifyContent="flex-start"
            spacing={2}
            sx={{
              minHeight: TOP_NAV_HEIGHT,
              // px: 2,
            }}
          >
            {leftNavAction}
            {title && <Typography variant="h6">{title}</Typography>}
          </Stack>
        </Container>
      </Box>
    </>
  );
}
