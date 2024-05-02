import LinkButton from "./LinkButton";

const Sidebar = () => {
  return (
    <div className="dark sidebar">
      <div>Nom prenom</div>

      <LinkButton>Evenements</LinkButton>
      <LinkButton>Joueurs</LinkButton>
      <LinkButton>Equipes</LinkButton>
    </div>
  );
};

export default Sidebar;
