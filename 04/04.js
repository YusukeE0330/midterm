function xor(fact5,fact6){
    var result;
    result = (fact5 && !fact6) || (!fact5 && fact6);
   
   return result;
}