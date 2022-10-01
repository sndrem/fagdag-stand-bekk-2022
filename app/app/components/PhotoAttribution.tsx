interface Props {
  userProfileLink: string;
  photoBy: string;
  attributionLink: string;
}

export function PhotoAttribution({
  userProfileLink,
  photoBy,
  attributionLink,
}: Props) {
  return (
    <small>
      Foto av{" "}
      <a className="underline" href={userProfileLink}>
        {" "}
        {photoBy}{" "}
      </a>{" "}
      fra{" "}
      <a className="underline" href={attributionLink}>
        Unsplash
      </a>{" "}
    </small>
  );
}
