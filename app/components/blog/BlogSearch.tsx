"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

export default function BlogSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? "";

  const [keyword, setKeyword] = useState(q);

  const handleSearch = () => {
    if (!keyword.trim()) {
      router.push("/blog");
    } else {
      router.push(`/blog?q=${encodeURIComponent(keyword.trim())}`);
    }
  };

  const handleClear = () => {
    setKeyword("");
    router.push("/blog");
  };

  return (
    <div className="mb-10 flex justify-center">
      <div className="w-full max-w-xl">
        <TextField
          fullWidth
          value={keyword}
          placeholder="キーワードで記事を検索"
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "var(--foreground)",
              backgroundColor: "var(--background)",
              borderRadius: "9999px",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--foreground)",
              opacity: 0.3,
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--foreground)",
              opacity: 0.6,
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--foreground)",
            },
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon
                    sx={{ color: "var(--foreground)", opacity: 0.6 }}
                  />
                </InputAdornment>
              ),
              endAdornment: keyword ? (
                <InputAdornment position="end">
                  <IconButton onClick={handleClear} size="small">
                    <ClearIcon
                      sx={{ color: "var(--foreground)", opacity: 0.6 }}
                    />
                  </IconButton>
                </InputAdornment>
              ) : null,
            },
          }}
        />
      </div>
    </div>
  );
}
