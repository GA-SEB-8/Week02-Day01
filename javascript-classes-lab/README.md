# Lab: **Battle Grounds — Warriors & Healers**

### Concepts Practiced:

* Classes and constructors
* Inheritance using `extends`
* Instance and static methods
* Passing object references to methods
* Bonus: Conditional logic and static instance tracking

---

## Part 1: Base Class — `Character`

### Instructions:

1. Create a class called `Character`.

2. This class should have the following properties:

   * `name` (string)
   * `health` (number)
   * `level` (number)

3. Add two instance methods:

   * `describe()` — logs something like:
     `"Name: Zara | Health: 80 | Level: 3"`
   * `takeDamage(amount)` — reduces `health` by `amount` and logs:
     `"Zara takes 10 damage. Remaining health: 70"`

---

## Part 2: Subclasses — `Warrior` and `Healer`

### Instructions:

1. Create a subclass `Warrior` that extends `Character`.

2. The `Warrior` constructor should:

   * Set `health = 120`, `level = 4` by default (unless passed differently)

3. Add a method `attack(target)`:

   * Accepts another character as the `target`
   * Damage is calculated as `this.level * 5`
   * Logs:
     `"Throg attacks Zara for 20 damage!"`

---

### Add conditional logic (Bonus 1):

* Only allow the warrior to attack if:

  * The target is alive (i.e., `target.health > 0`)
  * The warrior is also alive

* Prevent self-attack

* If the target’s health drops below 0, set it to 0 and log `"Zara has been defeated!"`

---

### Now, create the `Healer` class:

1. `Healer` should also extend `Character`.

2. The `Healer` constructor should:

   * Set `health = 100`, `level = 3` by default

3. Add a method `heal(target)`:

   * Heals the target by `this.level * 4`
   * Log: `"Elya heals Zara for 12 health!"`

### Add conditions (Bonus 1):

* Healer **cannot** heal characters who are already at or above 100 health
* Cannot heal a dead character (`health === 0`)
* Cannot heal themselves
* Ensure that healed health doesn’t go beyond 100

---

## Part 3: Static Property & Method for Warriors (Bonus 2)

### Instructions:

1. In the `Warrior` class:

   * Create a static property called `allWarriors` that is an array

2. Every time a new `Warrior` is created, push the instance into `Warrior.allWarriors`

3. Create a static method `listWarriors()` that:

   * Logs how many warriors have been created
   * Lists their names and health, like:

   ```
   3 warriors available:
   - Throg (Health: 90)
   - Rona (Health: 120)
   - Blaze (Health: 0)
   ```

---

## Part 4: Put It All Together

### Instructions:

1. Create the following characters:

   ```js
   const w1 = new Warrior("Throg");
   const w2 = new Warrior("Blaze");
   const h1 = new Healer("Elya");
   const c1 = new Character("Zara", 80, 2); // just a regular character
   ```

2. Simulate a battle:

   * Throg attacks Zara
   * Blaze attacks Zara
   * Elya heals Zara
   * Blaze attacks Elya
   * Elya heals herself (should be blocked by logic)

3. Use `Warrior.listWarriors()` to show all warrior statuses.

