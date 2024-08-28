import ArrowUpRigthIcon from "@/assets/icons/arrow-up-right.svg";

export const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="absolute h-[300px] w-[1400px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"/>
      <div className="container">
        <div className="border-t border-white/15 text-sm py-6 flex items-center justify-between">
          <div className="text-white/40">&copy; 2024.</div>
          <div>
            <a href="#" className="inline-flex items-center gap-1.5">
              <span className="font-semibold">LinkedIn</span>
              <ArrowUpRigthIcon className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
