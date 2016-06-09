function strlen(a){
var text_a = "Hello, ";
var text_b = "world!";

var length_a = strlen(text_a);
length_a == 7; // true

var length_b = strlen(text_b);
length_b == 6; // true

var new_text = concat(text_a, text_b); // "Hello, world!"
var length = strlen(new_text);
length == 13;
}
      