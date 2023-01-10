import { Control } from "../../components/Control";
import { PomoType } from "../../components/PomoType";
import { Timer } from "../../components/Timer";
import { Container } from "./styles";
export function Main({ navigation }: any) {
  return (
    <Container>
      <PomoType />
      <Timer />
      <Control navigation={navigation} />
    </Container>
  );
}
