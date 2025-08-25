import ThemeSwitcher from "@/components/ThemeToggle";

export function TopBar() {
    return (
        <div className="w-full h-10 flex items-center justify-end px-4 sm:px-8">
            <ThemeSwitcher />
        </div>
    );
}