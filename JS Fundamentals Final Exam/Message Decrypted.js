// Function to decrypt the message and check validity
function processInputs(inputs) {
    // Function to decrypt the message
    function decryptMessage(tag, nums) {
      const decryptedMessage = nums.map(num => String.fromCharCode(parseInt(num))).join('');
      return `${tag}: ${decryptedMessage}`;
    }
  
    for (let inputStr of inputs) {
      // Check if the input is valid
      if ((inputStr.startsWith('$') || inputStr.startsWith('%')) && inputStr.split(':').length === 2) {
        const [tag, rest] = inputStr.split(':');
        const tagName = tag.substring(1);
        if (tagName.length >= 3 && tagName[0] === tagName[0].toUpperCase() && tagName.substring(1).toLowerCase() === tagName.substring(1)) {
          const parts = rest.split('|');
          if (parts.length === 3) {
            const nums = parts.map(part => part.trim().substring(1, part.length - 1));
            try {
              const decrypted = decryptMessage(tagName, nums);
              console.log(decrypted);
              continue;
            } catch (error) {
              // Skip to next iteration if decryption fails
            }
          }
        }
      }
      console.log("Valid message not found!");
    }
  }
  
  // Array of inputs
  const inputs = [
    "$Request$: [73]|[115]|[105]|",
    "%Taggy$: [73]|[73]|[73]|",
    "%Taggy%: [118]|[97]|[108]|",
    "$Request$: [73]|[115]|[105]|[32]|[75]|"
  ];
  
  // Process inputs
  processInputs(inputs);
  



