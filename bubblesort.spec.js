describe('Bubble Sort', function() {

    spyOn(swap())
    expect(swap()).toHaveBeenCalled()
    spyOn(/* */) //comparison count
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([])
  })

  it('handles a single item', function() {
    expect(bubbleSort([0])).toEqual([0])
  })

  it('handles multiple items', function() {
    expect(bubbleSort([1,3,2])).toEqual([1,2,3])
  })

  
})

// describe('A suite is just a function', function() {
//   var a

//   it('and so is a spec', function() {
//     a = true

//     expect(a).toBe(true)
//   })
// })
