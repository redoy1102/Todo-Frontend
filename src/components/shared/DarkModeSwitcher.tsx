'use client';

const DarkModeSwitcher = ({ toggleDarkMode }: any) => {
  return (
    <div className="fixed bottom-0 left-0">
      <input
        type="checkbox"
        className="toggle toggle-success"
        defaultChecked={false}
        onChange={(e) => toggleDarkMode(e.target.checked)}
        title="Enable or Disable Dark Mode"
      />
    </div>
  );
};

export default DarkModeSwitcher;
