import mongoose from "mongoose";
const Schema = mongoose.Schema;

const customerSchema = new Schema({
	customerId: Number,
	name: String
});

const spentOfYearSchema = new Schema({
	customerId: Number,
	year: Number,
	totalSpent: Number
})

export const Customers = mongoose.model("customers", customerSchema);
export const SpentOfyears = mongoose.model("spentOfyears", spentOfYearSchema);
