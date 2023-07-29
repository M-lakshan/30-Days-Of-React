const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

class Statistics {
  constructor(arr=[]) {
    this.array = arr;
    this.error_msg = "provided array doesn't include any number values";
    this.default_err_msg = "error occurred";
  }

  format() { return this.array.map(elm => (typeof(parseInt(elm))=='number') ? parseInt(elm) : 0); }
  
  count() { return (this.format().length>0) ? this.format().length : this.default_err_msg; }

  sum() {
    if(this.array.every((age) => typeof(parseInt(age))=='number')) {
      return this.format().reduce((a,b) => a + b,0);
    } else {
      return this.error_msg;
    }
  }
  
  min() {
    if(this.array.some((age) => typeof(parseInt(age))=='number')) {
      let sorting_arr = this.array;
      return sorting_arr.filter(elm => elm!=0).sort((a,b) => a - b)[0];
    } else {
      return this.error_msg;
    }
  }
  
  max() {
    if(this.array.some((age) => typeof(parseInt(age))=='number')) {
      let sorting_arr = this.array;
      let sorted_arr = sorting_arr.sort((a,b) => a - b);
      return sorted_arr[sorted_arr.length-1];
    } else {
      return this.error_msg;
    }
  }

  range() {
    let range_result = this.max() - this.min();
    return (typeof(range_result)=='number' && typeof(range_result)!='NaN') ? range_result : this.error_msg;
  }

  mean() {
    let mean_result = Math.ceil(this.sum()/this.count());
    return (typeof(mean_result)=='number' && typeof(mean_result)!='NaN') ? mean_result : this.default_err_msg; 
  }
  
  median() {
    let median_result = this.array[parseInt(this.count()/2)];
    return (typeof(median_result)=='number' && typeof(median_result)!='NaN') ? median_result : this.default_err_msg; 
  }

  mode() {
    let result_arr_alt = [];
    let mode_result_arr = this.array.map(elm => elm).sort();
    let current_elm = '';
    let current_highest_occurence = '';
    let sorted_occurences = [];
    
    mode_result_arr.forEach(elm => {
      let first_index = mode_result_arr.indexOf(elm);
      let last_index = mode_result_arr.lastIndexOf(elm);
      let index_difference = last_index - (first_index-1);
      
      if(mode_result_arr.indexOf(elm)==0) { current_highest_occurence = index_difference; }
      
      if(current_elm!=elm) {
        current_elm = elm;
        result_arr_alt.push([elm,index_difference]);
      }

      if(index_difference>current_highest_occurence) { current_highest_occurence = index_difference; }
    });

    current_elm = '';
    result_arr_alt.forEach(elm => {
      if(current_highest_occurence==elm[1]) { sorted_occurences.push(elm[0]) }
    });

    return ((sorted_occurences.length>1) ? `values: ${sorted_occurences.join(', ')}` : `value: ${sorted_occurences}`)+` | occurence: ${current_highest_occurence}`;
  }

  var() {
    // Formula: V = (Σ(x - μ)^2 / n)
        // x is a data in array
        // μ is the mean
        // n is the length of the array
        // Σ is the sum of all

    return (this.format()
      .map((elm) => Math.pow((elm - this.mean()), 2))
      .reduce((acc, curr) => acc + curr,0)
      )/this.count();
  }

  std() {
    // square_root of the Variance
    return Math.round(Math.sqrt(this.var())*10)/10;
  }

  freqDist() {
    // 'Frequency Distribution' concept based from a tutorial
    const freqDistb = {};
    for(let elm of this.array) { freqDistb[elm] = (freqDistb[elm]||0) + 1; }
    return Object.entries(freqDistb).sort((a,b) => b[1] - a[1]);
  }
}

const statistics = new Statistics(ages);

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) 
// [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)];