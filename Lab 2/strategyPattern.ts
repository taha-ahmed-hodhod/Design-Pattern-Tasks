interface SortingStrategy {
    sort(arr: number[]): number[];
}

class BubbleSort implements SortingStrategy {
    sort(arr: number[]): number[] { 
        console.log("Bubble Sorting...");
        return arr.sort(); 
    }
}

class Sorter {
    private strategy!: SortingStrategy;
    setStrategy(s: SortingStrategy) { this.strategy = s; }
    executeSort(arr: number[]) { this.strategy.sort(arr); }
}

// Test
const sorter = new Sorter();
sorter.setStrategy(new BubbleSort());
sorter.executeSort([5, 2, 8]);