interface Door extends Model {
	Stick: Part & {
		Weld: Weld;
	};
	Hitbox: Part;
	Door: Part;
}

interface Room extends Model {
	Exit: Part;
	Enter?: Part;
	Door: Door;
	Parts: Folder;
}
