import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import avatarImage from "../assets/ani_eren.avif";

function Home() {
  return (
    <div className="about">
      <div className="header">
        <Stack direction="column" spacing={2}>
          <Avatar alt="Mikail Avatar" src={avatarImage} />
        </Stack>
      </div>
      <p>
        {" "}
        <strong>Hi, I'm Mikail</strong>{" "}
      </p>
      <p> ich bin azubi im 2 Lehrjahr im bereich Anwendungsentwicklung</p>
      <div className="bottomcase">
        <nav>
          <button
            onClick={() =>
              document
                .getElementById("Projekte")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Projekte
          </button>
          <button
            onClick={() =>
              document
                .getElementById("kontakt")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Kontakt
          </button>
        </nav>

        <section id="Projekte" style={{ height: "250vh", background: "#ccc" }}>
          <h1>Projekte</h1>
        </section>

        <section
          id="kontakt"
          style={{ height: "10vh", background: "#c90f0fff" }}
        >
          <h1>Kontakt</h1>
          <InstagramIcon />
          <GitHubIcon />
        </section>
      </div>
    </div>
  );
}

export default Home;
