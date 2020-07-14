<!--* Headings -->
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

<!-- Alternative for H1 & H2 -->
Alt-H1
======

Alt-H2
------


## Italics 
<!-- (CTRL+i) -->
*This text* is italic

_This text_ is italic


## Strong 
<!-- (CTRL + b) -->
**This text** is bold

__This text__ is bold


## Italics and bold combined
Combined emphasis with **asterisks and _underscores_**.

***combined***  
___combined___

## Strikethrough
~~This text~~ is striketrough

<!-- Escape special characters -->
\*This text\* is not italic


## Horizontal rule
Three or more...

---

Hyphens

***

Asterisks

___

Underscores

## Blockquote
> This is a quote  
> And this is a new line in it

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.

---

## Links
[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links. 
http://www.example.com or <http://www.example.com> and sometimes 
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

---

## Unordered list
* Item 1
* Item 2
  * Nested 1
  * Nested 2
    * More nested 1
  * Nested 3
* Item 3

* Unordered list can use asterisks
- Or minuses
+ Or pluses
  
---

## Ordered list
1. Item 1
2. Item 2
3. Item 3
   1. Nested 1
   2. Nested 2
      1. More nested

## Mixed lists
1. First ordered list item
2. Another item
* Unordered sub-list. 
3. Actual numbers don't matter, just that it's a number
   1. Ordered sub-list
4. And another item.


---

You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

To have a line break without a paragraph, you will need to use two trailing spaces.  
Note that this line is separate, but within the same paragraph.

    Indented paragraph (treated as block of code)

---

## Code
Inline `code` has `back-ticks around` it.

<p>This is a paragraph</p>

`<p>This is a paragraph</p>`

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
let arr = [1,2,3];
for (let a of array) console.log(a)
```
 
```python
s = "Python syntax highlighting"
print s
```

```css
div {
    background: blue;
    cursor: none;
}
```

```scss
#btn {
    background: blue;
    cursor: none;

    &--blue {
        color: red;
    }
}
```
 
```
No language indicated, so no syntax highlighting. 
But let's throw in a <b>tag</b>.
```
---

## Inline HTML
<dl>
  <dt>Definition list</dt>
  <dd>Is something <strong>people</strong> use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

---

## Line breaks
Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also a separate paragraph, but...  
This line is only separated by a single newline (and two spaces), so it's a separate line in the *same paragraph*.

---

## Images

Inline style:
![Markdown Logo](https://markdown-here.com/img/icon128.png "Logo Title Text 1")

Reference-style: 
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

---


# GITHUB MARKDOWN
```bash
    npm install
    npm start
```

## Tables 
| Name     | Email          |
| -------- | -------------- |
| John Doe | john@gmail.com |
| Jane Doe | jane@gmail.com |

## Task List
<!-- use alt + c to check/uncheck -->
* [x] Task 1
* [x] Task 2
* [ ] Task 3