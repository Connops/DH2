export const Moves: {[moveid: string]: ModdedMoveData} = {
silcoonsexactmovepool: {
		num: 802,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "silcoonsexactmovepool",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onHit(source) {
		  this.actions.useMove("Tackle", source);
      this.actions.useMove("String Shot", source);
      this.actions.useMove("Poison Sting", source);
      this.actions.useMove("Bug Bite", source);
      this.actions.useMove("Iron Defense", source);
		},
		secondary: null,
		target: "allAdjacent",
		type: "Fairy",
    shortDesc: "This pokemon uses Tackle, String Shot, Poison Sting, Bug Bite, and Iron Defense, in that order.",
	},
  	pog: {
		num: 573,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "POG",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onEffectiveness(typeMod, target, type) {
		    return 1;
		},
    selfBoost: {
			boosts: {
				atk: 1,
			},
		},
    status: 'par',
		target: "normal",
		type: "Steel",
    shortDesc: "Always super-effective. Always paralyzes. Raises user's attack by one stage.",
		contestType: "Beautiful",
	},
  	velvetblade: {
		num: 371,
		accuracy: 100,
		basePower: 100,
		onPrepareHit(pokemon, target, move) {
			if (target.newlySwitched || this.queue.willMove(target)) {
				this.debug('Payback NOT boosted');
				return move.basePower;
			}
			this.debug('Payback damage boost');
			return move.willCrit = true;
		},
		category: "Physical",
		name: "Velvet Blade",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1, slicing: 1},
		secondary: null,
		target: "normal",
		type: "Dark",
    shortDesc: "Slicing move. If user moved after target, always crits.",
		contestType: "Tough",
	},
  	mogoff: {
		num: 542,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Mog Off",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		secondary: {
			chance: 50,
			volatileStatus: 'confusion',
		},
		target: "any",
		type: "Ghost",
		contestType: "Tough",
    shortDesc: "50% chance to confuse the target.",
	},
  	chocolatekiss: {
		num: 411,
		accuracy: 60,
		basePower: 100,
		category: "Physical",
		name: "Chocolate Kiss",
		pp: 20,
		priority: 1,
		flags: {protect: 1, mirror: 1, metronome: 1},
		secondary: {
			chance: 70,
			boosts: {
				spe: -1,
			},
		},
		target: "normal",
		type: "Fairy",
    shortDesc: "+1 priority. Has a 70% chance to lower target's speed by 1.",
		contestType: "Cool",
	},
  	fishingminigame: {
		num: 615,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Fishing Minigame",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, contact: 1},
		onHit(target, source, move) {
			if (source.isActive) target.addVolatile('trapped', source, move, 'trapper');
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Water",
		contestType: "Tough",
    shortDesc: "Traps the target",
	},
  	stankyleg: {
		num: 440,
		accuracy: 95,
		basePower: 60,
		category: "Physical",
		name: "Stanky Leg",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		secondary: {
			chance: 100,
			status: 'tox',
		},
		target: "normal",
		type: "Poison",
		contestType: "Cool",
    shortDesc: "100% chance to badly poisonthe target.",
	},
  	triplerkick: {
		num: 813,
		accuracy: 90,
		basePower: 20,
		basePowerCallback(pokemon, target, move) {
			return 20 * move.hit;
		},
		category: "Physical",
		name: "Tripler Kick",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		multihit: 3,
		multiaccuracy: true,
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMove: {basePower: 120},
		maxMove: {basePower: 140},
	},
}
