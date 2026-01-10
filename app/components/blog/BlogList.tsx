import { BlogArticle } from "@/types/blog";
import { Grid } from "@mui/material";
import BlogCard from "./BlogCard";

export default function BlogList({ articles }: { articles: BlogArticle[] }) {
  return (
    <Grid container spacing={3}>
      {articles.map((article) => (
        <Grid size={{ xs: 12, md: 6 }} key={article.id}>
          <BlogCard article={article} />
        </Grid>
      ))}
    </Grid>
  );
}
