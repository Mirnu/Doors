import { Components } from "@flamework/components";
import { Service, OnStart } from "@flamework/core";
import { Players } from "@rbxts/services";
import Signal from "@rbxts/signal";
import { RoomManager } from "server/classes/RoomManager/RoomManager";
import { PlayerComponent } from "server/components/PlayerComponent";

@Service({})
export class PlayerService implements OnStart {
	public RoomPassedSignal = new Signal<(room: Room) => void>();
	constructor(private components: Components) {}

	onStart() {
		Players.PlayerAdded.Connect((player) => {
			//const playerComponent = this.components.addComponent<PlayerComponent>(player);
			new RoomManager().Init();
		});
	}
}
