
<script lang="ts">
    let currentBalance = 435
    let expectedBalance = 235
    let nextIncomeDate = '2024-08-06'
  </script>
  
  <div class="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
    <div class="bg-white rounded-lg p-4 shadow dark:bg-deepblue-400">
      <h2 class="mb-2 text-lg font-semibold dark:text-white-100">
        Current Balance
      </h2>
      <p class="text-3xl font-bold dark:text-white-100">${currentBalance.toFixed(2)}</p>
    </div>
    <div class="bg-white rounded-lg p-4 shadow dark:bg-deepblue-400">
      <h2
        class="mb-2 text-lg font-semibold dark:text-white-100"
      >
        Expected Balance Before Next Income
      </h2>
      <p class="text-3xl font-bold dark:text-white-100">${expectedBalance.toFixed(2)}</p>
      <p class="text-sm text-warmgrey-500 dark:text-warmgrey-300">
        Next income on {nextIncomeDate}
      </p>
    </div>
  </div>
  
  <!-- Add more dashboard content here -->
  