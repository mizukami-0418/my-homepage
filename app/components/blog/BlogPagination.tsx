"use client";

import { Pagination, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

type Props = {
  currentPage: number;
  totalPages: number;
  keyword?: string;
};

export default function BlogPagination({
  currentPage,
  totalPages,
  keyword,
}: Props) {
  const router = useRouter();

  const handleChange = (_: React.ChangeEvent<unknown>, page: number) => {
    const params = new URLSearchParams();

    if (keyword) params.set("q", keyword);
    params.set("page", String(page));

    router.push(`/blog?${params.toString()}`);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Stack spacing={2} alignItems="center" className="mt-10">
      <Typography>Page: {currentPage}</Typography>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        size="large"
        variant="outlined"
        showFirstButton
        showLastButton
        sx={{
          "& .MuiPaginationItem-root": {
            color: "var(--foreground)",
            borderColor: "var(--foreground)",
          },
        }}
      />
    </Stack>
  );
}
