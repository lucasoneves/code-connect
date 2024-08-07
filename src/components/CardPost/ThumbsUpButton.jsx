import { IconButton } from "../IconButton";
import { FaRegThumbsUp } from "react-icons/fa";

import { useFormStatus } from "react-dom";
import { Spinner } from "../Spinner";

export const ThumbsUpButton = () => {
  const { pending } = useFormStatus();
  return <IconButton>{pending ? <Spinner /> : <FaRegThumbsUp fill="#888" size={16} />}</IconButton>;
};
