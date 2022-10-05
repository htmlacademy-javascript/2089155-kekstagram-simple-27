const calculateComment = function (string, limit) {
  if (string.length <= limit) {
    return true;
  }
  return false;
};

// return string.length <= limit;

const even = function(number) {
  if (!(number % 2)) {
    return true;
  }
  return false;
};


const odd = function(number) {
  if (number % 2) {
    return true;
  }
  return false;
};


const random = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
