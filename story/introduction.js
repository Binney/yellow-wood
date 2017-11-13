const plot = {
	"The yellow wood":	{
		prose: "You find yourself on a path through an unfamiliar forest on the cusp of winter. Watery sunlight shines through the yellow canopy, and the woods are alive with the sound of a cool wind crackling through fallen leaves.",
		choices: [
			{
				option: "Go north",
				link_to: "The northern path"
			},
			{
				option: "Go south",
				link_to: "Southwards"
			}
		]
	},
	"The northern path": {
		prose: "You walk north, away from the forest, into the mountains, up and up and up.",
		is_death: true
	},
	"Southwards": {
		prose: "You choose the southern path. After a long time walking through the forest you come to the sea.",
		choices: [
			{
				option: "Go north",
				link_to: "The yellow wood"
			},
			{
				option: "Dive",
				link_to: "The clifftop"
			}
		]
	},
	"The clifftop": {
		prose: "The wine-dark sea rumbles far beneath you. You leap.",
		is_death: true
	}
};