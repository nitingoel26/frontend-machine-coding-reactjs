import { type FileProps } from "./FileExplorer";
import FileObj from "./FileObj";
const FileRenderer = ({
  data,
  level,
}: {
  data: ReadonlyArray<FileProps>;
  level: number;
}) => {
  const dataWithChildren = data.filter((item) => item?.children);
  const dataWithoutChildren = data.filter((item) => !item?.children);
  dataWithChildren.sort((obj1, obj2) => obj1.name.localeCompare(obj2.name));
  dataWithoutChildren.sort((obj1, obj2) => obj1.name.localeCompare(obj2.name));
  const completeData = [...dataWithoutChildren, ...dataWithChildren];

  return (
    <ul className="file-list">
      {completeData?.map((item) => (
        <FileObj key={item.id} data={item} level={level} />
      ))}
    </ul>
  );
};

export default FileRenderer;
