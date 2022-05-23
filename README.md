# TypeScript 101

Let's learn some TypeScript!

## Steps

1. Clone [this repository](https://github.com/JoinCODED/TASK-Masterclass-M4-TypeScript).
2. Run `npm install`.

## Interfaces

1. Go to `src/interfaces.ts`, we have some functions to complete.
2. You will notice that the interfaces are incomplete, so we must go to `models/people.ts` and complete those interfaces too.
3. Type in the `Person` interface:
   - **firstName**: `string`
   - **lastName**: `string`
   - **age**: `number`
4. Complete the function for `showPerson` and behold the magic of auto-completion!
5. Verify your script works by running `npm start`.
6. Type in the `Employee` interface:
   - **firstName**: `string`
   - **lastName**: `string`
   - **age**: `number`
   - **company**: `string`
   - **position**: `string`
7. Verify your script works by running `npm start`.
8. Type in the `Manager` interface:
   - **firstName**: `string`
   - **lastName**: `string`
   - **age**: `number`
   - **company**: `string`
   - **position**: `string`
   - **level**: `number`

### Interfaces Bonus

Do not re-type the common field for `Employee` and `Manager`, instead:

1. Have `Employee` "extend" `Person`.
1. Have `Manager` "extend" `Employee`.

### Interfaces Spicy Bonus

- Experiment inlining the interfaces in `src/interfaces.ts` instead of having them imported elsewhere.
- Try using `intersections` instead of `extending`.

## Enums and Unions

1. Go to `src/models/screens.ts` and add the following sizes to `ScreenSize`, and **make sure to lower case the names** (hint: these are enum members, do not confuse them with `interfaces`):
   - **xl**: `number`
   - **lg**: `number`
   - **md**: `number`
   - **sm**: `number`
   - **xs**: `number`
2. Add logic to `getTemplate` in `src/unions.ts` to return an appropriate string based on the screen size.
   - For example, if the `size` is equal to `ScreenSize.lg` we should return `"my-large-template.html"`.
3. Type `TimeLike` in `src/unions.ts` to be union of a `string` (e.g., `13:00`), `number`, a `Time` object, and a `object` with the following shape `{hour: number; minute: number}`.
4. Use type narrowing to complete the `parse` method.
5. Add logic to complete the `isGreaterThan` function.
6. Add logic to complete the `isLesserThan` function (you may use the `isGreaterThan` and `isEqual` methods to determine a strict `isLesserThan` return value).
7. Add logic to complete the `isEqual` function.

## Enum Bonus

1. Add a string enum for `Meridian` in `unions.ts`.
2. Complete the `get meridian` getter method in the `Time` class.
3. Verify that the console logs are printing the time correctly formatted.

## Enum Spicy Bonus

1. Use reverse enum mapping to return the name of the enum used in `getScreenName` (e.g., `ScreenSize.lg` -> `lg`).
2. Properly type `ScreenName` so that it is not `any` (hint: look into using `typeof` and slicing `ScreenSize` with a `type` to reverse map its annotation).

## Generics

1. Go to `src/generics.ts`.
2. Add a `protected abstract storage` type hint, which implements the shape of a `Storage`.
   - Add a concrete `protected storage` variable in the subclasses below it (hint: `LocalStorageItem` will have `localStorage`, and `SessionStorageItem` will be `sessionStorage`).
3. Use this `abstract storage` in `remove()` to remove the value stored by referencing its `name`.
4. Make `StorageItem` generic, and take in the generic type in `set()` instead of `any`.
5. Store the value received as a string, but attach a `nullable` expiration date before setting the value. For example, if we receive `1`, then our resulting object should be `{ exp: 10931039310930, "value": 1 }`, where `exp` is `Date.now() + this.exp`. If `exp` is `nullish` then our object would look like this: `{ exp: undefined, "value": 1 }`. Again, this object should be stringified before being set in storage.
6. Complete the `get` by fulfilling the following requirements:
   1. Get the object from storage.
   2. If it is not `null` then `JSON.parse` it (remember to wrap it in a `try-catch` block).
   3. If the parsing was successful, then check the `exp`, if it exceeds `Date.now()` then remove the item using `this.remove()`.
   4. If it has not expired then **only return the value**, not the entire object.
   5. If one of the conditions above has not passed, or an exception occurred while parsing then return null.
