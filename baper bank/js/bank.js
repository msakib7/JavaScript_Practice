console.log("passed");
      document
        .getElementById("btn-deposit")
        .addEventListener("click", function () {
          const depositField = document.getElementById("input-deposit");
          const newDepositAmount = depositField.value;
          if (isNaN(newDepositAmount)) {
            alert("Please Povide a valid number");
            return;
          }

          const totalDepositElement = document.getElementById("total-deposit");
          const previousDeposit = totalDepositElement.innerText;
          const currentDepositTotal = 
            parseFloat(previousDeposit) + parseFloat(newDepositAmount);
          totalDepositElement.innerText = currentDepositTotal;

          const totalBalanceElement = document.getElementById("total-balance");
          const totalBalance = totalBalanceElement.innerText;
          const totalCurrentBalance =
            parseFloat(totalBalance) + parseFloat(newDepositAmount);
          totalBalanceElement.innerText = totalCurrentBalance;
          depositField.value = "";
        });

      document
        .getElementById("btn-withdraw")
        .addEventListener("click", function () {
          const withdrawField = document.getElementById("input-withdraw");
          const newWithdeawAmount = withdrawField.value;
          if (isNaN(newWithdeawAmount)) {
            alert("Please Povide a valid number");
            return;
          }
          const totalWithdrawElement = document.getElementById("total-wihdraw");
          const previousWithdraw = totalWithdrawElement.innerText;
          const currentWithdrawTotal =
            parseFloat(newWithdeawAmount) + parseFloat(previousWithdraw);

          const totalBalanceElement = document.getElementById("total-balance");
          const totalBalance = totalBalanceElement.innerText;
          withdrawField.value = "";
          if (parseFloat(totalBalance) < parseFloat(newWithdeawAmount)) {
            alert("You dont have sufficient balance in your account");
            return;
          }
          totalWithdrawElement.innerText = currentWithdrawTotal;
          const totalCurrentBalance =
            parseFloat(totalBalance) - parseFloat(newWithdeawAmount);
          totalBalanceElement.innerText = totalCurrentBalance;
        });