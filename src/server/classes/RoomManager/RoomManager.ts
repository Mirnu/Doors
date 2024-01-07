import { Dependency } from "@flamework/core";
import { ReplicatedStorage, Workspace } from "@rbxts/services";
import { PlayerComponent } from "server/components/PlayerComponent";
import { PlayerService } from "server/services/PlayerService";

const playerService = Dependency<PlayerService>();

export class RoomManager {
	private CountDoors = 1;

	public Init() {
		playerService.RoomPassedSignal.Connect((lastRoom) => {
			this.createNewRoom(lastRoom.Exit);
		});
	}

	private createNewRoom(exitPart: Part) {
		const rooms = ReplicatedStorage.Prefabs.Rooms.GetChildren();
		const newRoom = rooms[math.random(1, rooms.size()) - 1].Clone() as Room;

		newRoom.PrimaryPart!.CFrame = exitPart.CFrame;
		newRoom.Parent = Workspace;
	}
}
