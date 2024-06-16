import { getDocumentContent } from "@/lib/doc";
import Link from "next/link";
import Tag from "./Tag";

const ContentDisplay = async ({ id }) => {
  const documentContent = await getDocumentContent(id);
  console.log(documentContent);
  return (
    <article className="prose dark:prose-invert">
      <h1>{documentContent.title}</h1>
      <div>
        <span>Published On : {documentContent.date} </span> By{" "}
        <Link href={`/author/${documentContent.author}`}>
          {documentContent.author}
        </Link>{" "}
        Under The{" "}
        <Link href={`/categories/${documentContent.category}`}>
          {documentContent.category}
        </Link>{" "}
        Category
      </div>
      <div>
        {documentContent.tags &&
          documentContent.tags.map((tag) => <Tag key={tag} tag={tag} />)}
      </div>
      <div
        className="lead "
        dangerouslySetInnerHTML={{ __html: documentContent.contentHtml }}
      />
    </article>
  );
};
export default ContentDisplay;
