import { useState } from "react";
import { type FileProps } from "./FileExplorer";
import FileRenderer from "./FileRenderer";
const FileObj = ({
  data,
  level,
}: Readonly<{ data: FileProps; level: number }>) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <li className="file-item">
      <button
        className={[
          "file-item-button",
          data?.children && "file-item-button--directory",
        ]
          .filter(Boolean)
          .join(" ")}
        onClick={() => {
          if (!data?.children) return;
          setExpanded((prev) => !prev);
        }}
      >
        <span>{data.name}</span>{" "}
        {data?.children && data.children.length > 0 && (
          <>[{expanded ? "-" : "+"}]</>
        )}
      </button>
      {data?.children && data.children.length > 0 && expanded && (
        <FileRenderer data={data.children} level={level + 1} />
      )}
    </li>
  );
};

export default FileObj;
