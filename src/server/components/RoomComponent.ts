import { Dependency, OnStart } from "@flamework/core";
import { Component, BaseComponent, Components } from "@flamework/components";
import { TweenService } from "@rbxts/services";
import { PlayerService } from "server/services/PlayerService";

interface Attributes {}

const playerService = Dependency<PlayerService>();

@Component({
	tag: "Room",
})
export class RoomComponent extends BaseComponent<Attributes, Room> implements OnStart {
	onStart() {
		const connect = this.instance.Door.Hitbox.Touched.Connect((otherPart) => {
			print(0);
			const model = otherPart.FindFirstAncestorOfClass("Model");
			const humanoid = model?.FindFirstChildOfClass("Humanoid");

			if (humanoid !== undefined) {
				print(1);
				connect.Disconnect();
				this.instance.Door.Hitbox.CanTouch = false;
				this.openDoor();
				playerService.RoomPassedSignal.Fire(this.instance);
			}
		});
	}

	private openDoor() {
		const ts = TweenService.Create(this.instance.Door.Stick, new TweenInfo(1), {
			CFrame: this.instance.Door.Stick.CFrame.mul(CFrame.Angles(0, math.rad(-90), 0)),
		});
		ts.Play();
	}
}
