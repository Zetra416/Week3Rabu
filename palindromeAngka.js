function angkaPalindrome(num) {
while (num>0) {
  num++;
  var angka = num.toString();
  var angkaBalik = "";

  for (var i = angka.length - 1; i >= 0; i--) {
    angkaBalik+= angka[i];
  }
  if (angkaBalik == num) {
    return num;
  }
}
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
