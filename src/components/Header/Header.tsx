import { Group, createStyles } from "@mantine/core";

const useStyles = createStyles(() => ({
  container: {
    backgroundColor: "#053",
    color: "#fff",
    padding: "20px 30px",
  },
}));

interface Props {
  className?: string;
}

const Header = ({ className }: Props) => {
  const { classes, cx } = useStyles();

  return (
    <Group className={cx(classes.container, className)}>
      <h3>Cybersoft Movie</h3>
    </Group>
  );
};

export default Header;
