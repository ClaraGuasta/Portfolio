export const calculateMonths = (() => {
    const startDate = new Date('2022-05-16');
    const currentDate = new Date();

    const months = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + (currentDate.getMonth() - startDate.getMonth());
    return months
})