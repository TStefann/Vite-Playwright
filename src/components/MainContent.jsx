import { useState } from "react";

import HelpArea from "./HelpArea";

function MainContent() {
  const [helpVisible, setHelpVisible] = useState(false);

  function toggleHelp() {
    setHelpVisible((isVisible) => !isVisible);
  }

  return (
    <main>
      <button onClick={toggleHelp}>
        {helpVisible ? "Hide" : "Show"} Hints
      </button>
      {helpVisible && <HelpArea />}
    </main>
  );
}

export default MainContent;
