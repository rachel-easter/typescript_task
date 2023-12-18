function calculateCabFare(cabType: string, distanceInKm: number, discountCode: string | undefined): string {
    // Define the rate per kilometer for each cab type
    let ratePerKm: number;

    switch (cabType.toLowerCase()) {
        case 'micro':
            ratePerKm = 10;
            break;
        case 'mini':
            ratePerKm = 15;
            break;
        case 'prime':
            ratePerKm = 25;
            break;
        default:
            return "Invalid cab type. Please choose Micro, Mini, or Prime.";
    }

    // Apply discount based on discount code
    let discountPercentage: number = 0;
    if (discountCode === 'FIRSTRIDE') {
        discountPercentage = 10; // 10% discount for the first ride
    } else if (discountCode === 'DISCOUNT20') {
        discountPercentage = 20; // 20% discount for a specific discount code
    }

    // Calculate total fare
    const totalFare: number = distanceInKm * ratePerKm * (1 - discountPercentage / 100);

    // Return the result as a formatted string
    return `Total payable fare: Rs. ${totalFare.toFixed(2)}`;
}

// Example usage
const cabType: string = prompt("Enter cab type (Micro, Mini, Prime):") || "";
const distance: number = parseFloat(prompt("Enter distance in kilometers:") || "0");
const discountCode: string | undefined = prompt("Enter discount code (Leave blank if none):");

const fareResult: string = calculateCabFare(cabType, distance, discountCode);
console.log(fareResult);
