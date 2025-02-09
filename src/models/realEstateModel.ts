import mongoose, { Schema, Document } from 'mongoose';

// Define the schema for the real estate form
const personalDetailsSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true }
});

const contactDetailsSchema = new Schema({
  phone: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  preferredContact: { type: String, required: true }
});

const propertyPreferencesSchema = new Schema({
  type: { type: String, required: true },
  budgetMin: { type: Number, required: true },
  budgetMax: { type: Number, required: true },
  location: { type: String, required: true },
  desiredFeatures: { type: String }
});

const financialDetailsSchema = new Schema({
  employmentStatus: { type: String, required: true },
  income: { type: Number, required: true },
  downPayment: { type: Number, required: true },
  creditScore: { type: Number, required: true }
});

const propertyHistorySchema = new Schema({
  currentHousing: { type: String, required: true },
  reasonForMoving: { type: String, required: true },
  previousAgent: { type: String }
});

const additionalInfoSchema = new Schema({
  referralSource: { type: String },
  marketingConsent: { type: Boolean }
});

const realEstateSchema = new Schema({
  personalDetails: { type: personalDetailsSchema, required: true },
  contactDetails: { type: contactDetailsSchema, required: true },
  propertyPreferences: { type: propertyPreferencesSchema, required: true },
  financialDetails: { type: financialDetailsSchema, required: true },
  propertyHistory: { type: propertyHistorySchema, required: true },
  additionalInfo: { type: additionalInfoSchema, required: true },
  termsAgreement: { type: Boolean, required: true }
});

const RealEstate = mongoose.model('RealEstate', realEstateSchema);

export default RealEstate;
