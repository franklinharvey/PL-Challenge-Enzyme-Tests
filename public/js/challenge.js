/*
 * FRONT-END CODING CHALLENGE
 *
 * Write a JavaScript component that follows the guidelines below. Use whatever
 * frameworks, libraries or code structure you like. Keep in mind it doesn't
 * have to be pretty so don't worry too much about polishing the styles.
 *
 * 1. Display the array below in a HTML list (Must be done dynamically)
 * 2. For each list item in the array:
 *      - Display the `title` attribute with a `H3` tag
 *      - Display the `type` attribute with a `span` tag
 *      - Make sure that each new word of `type` attribute is capitalized and
          all underscores or dashes are converted to spaces in the HTML (without
          changing the underlying data)
 *      - Style each list item with `3px` rounded corners
 *      - Add a button to each list item titled "REMOVE"
 * 3. Make sure the list and list items are responsive
 * 4. Write a function that removes the item from the array when clicked. Make
 *    sure the HTML list view reflects this data change
 * 5. Sort the list alphabetically based on the `title` attribute (without
 *    changing the order in the array)
 * 6. Write 3 unit tests for your component in order to test your code
 */

var data = [
  {
    "type": "case",
    "title": "9th Street",
    "id": "a0445e60-428b-44aa-a1a4-c7a750da9e8d"
  },
  {
    "type": "case",
    "title": "Central Perk Case",
    "id": "f673e7fe-e93f-47ad-9044-9c901455a436"
  },
  {
    "type": "phone_number",
    "title": "John Smith",
    "id": "470ec15f-2dac-417d-815b-52cd621d8437"
  },
  {
    "type": "phone_number",
    "title": "Jane Smith",
    "id": "f4cf5a20-0ef3-4a84-9bee-394f510e1629"
  },
  {
    "type": "case",
    "title": "Local PD",
    "id": "c9828623-f664-47b5-bdea-d6658f287fc5"
  },
    {
    "type": "case",
    "title": "Local TF",
    "id": "876490b5-b23b-4fbd-a9b8-e781406bf7b8"
  },
  {
    "type": "case",
    "title": "MCDA",
    "id": "b3d8a058-b980-4d92-841f-9994a346676d"
  },
  {
    "type": "case",
    "title": "DGTF",
    "id": "42036cb2-2689-4e02-b4bd-c23ca8da72fe"
  },
  {
    "type": "phone_number",
    "title": "Jim Smith",
    "id": "f5abd74d-1a6c-4d0d-a9db-fd516b8d964c"
  },
  {
    "type": "case",
    "title": "Main Street",
    "id": "f631759c-45c7-4ee5-be3a-f52ccee9a920"
  }
];
