import { OnStart } from "@flamework/core";
import { Component, BaseComponent } from "@flamework/components";
import Signal from "@rbxts/signal";

interface Attributes {}

@Component({})
export class PlayerComponent extends BaseComponent<Attributes, Player> implements OnStart {
	onStart() {}
}
