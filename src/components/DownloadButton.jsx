export const DownloadButton = ({
  className = "",
  size = "default",
  children,
}) => {
  const baseClasses =
    "relative overflow-hidden rounded-full flex items-center font-medium glass hover:bg-primary/40 cursor-pointer";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
  return (
    <a className={classes} href="/Vladimir_Ivaniuc_CV.pdf" download>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </a>
  );
};
