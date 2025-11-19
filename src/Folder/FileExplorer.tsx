import React from "react";
import FileRenderer from "./FileRenderer";

export type FileProps = Readonly<{
  id: number;
  name: string;
  children?: ReadonlyArray<FileProps>;
}>;

const FileExplorer = ({ data }: { data: ReadonlyArray<FileProps> }) => {
  return (
    <div>
      <FileRenderer data={data} level={1} />
    </div>
  );
};

export default FileExplorer;
