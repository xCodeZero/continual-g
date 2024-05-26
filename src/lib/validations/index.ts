import * as z from "zod";

const CreateUserInputValidation = z.object({
  // affiliateId: z
  //   .string()
  //   .min(3, {
  //     message: "Affiliate ID must be at least 3 characters.",
  //   })
  //   .max(50, {
  //     message: "Affiliate ID must be at most 50 characters.",
  //   }),
  firstName: z
    .string()
    .min(3, {
      message: "First name must be at least 3 characters.",
    })
    .max(50, {
      message: "First name must be at most 50 characters.",
    }),
  lastName: z
    .string()
    .min(3, {
      message: "Last name must be at least 3 characters.",
    })
    .max(50, {
      message: "Last name must be at most 50 characters.",
    }),
  email: z
    .string()
    .email({
      message: "Enter a valid email",
    })
    .min(2, {
      message: "email must be at least 2 characters.",
    }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters.",
    })
    .max(25, {
      message: "Password must be at most 25 characters.",
    }),
  phoneNumber: z
    .string()
    .min(3, {
      message: "Please provide a contact number.",
    })
    .max(50, {
      message: "Please provide a valid contact number",
    }),
  address: z
    .string()
    .min(3, {
      message: "Please provide a address.",
    })
    .max(200, {
      message: "Please provide a valide address.",
    }),
});

const CreateMeetingInputValidation = z.object({
  firstName: z
    .string()
    .min(3, {
      message: "First name must be at least 3 characters.",
    })
    .max(50, {
      message: "First name must be at most 50 characters.",
    }),
  lastName: z
    .string()
    .min(3, {
      message: "Last name must be at least 3 characters.",
    })
    .max(50, {
      message: "Last name must be at most 50 characters.",
    }),
  email: z
    .string()
    .email({
      message: "Enter a valid email",
    })
    .min(2, {
      message: "email must be at least 2 characters.",
    }),
  phoneNumber: z
    .string()
    .min(3, {
      message: "Please provide a contact number.",
    })
    .max(50, {
      message: "Please provide a valid contact number",
    }),
  profession: z
    .string()
    .min(3, {
      message: "Please provide your profession.",
    })
    .max(200, {
      message: "Please provide a valid profession.",
    }),
  state: z
    .string()
    .min(3, {
      message: "Please provide your state.",
    })
    .max(200, {
      message: "Please provide a valid state.",
    }),
  reason: z
    .array(
      z
        .string()
        .min(3, { message: "Please provide your reason." })
        .max(200, { message: "Please provide a valid reason." })
    )
    .nonempty({ message: "At least one reason is required." }),
  agree: z.boolean(),
});

const LoginUserInputValidation = z.object({
  accountId: z.string().min(2, {
    message: "Account ID must be at least 10 characters.",
  }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters.",
    })
    .max(25, {
      message: "Password must be at most 25 characters.",
    }),
});

const CreateOrderInputValidation = z.object({
  packageId: z.string(),
});

const CreateCashoutInputValidation = z.object({
  amount: z
    .string()
    .min(3, {
      message: "Amount must be at least 1 characters.",
    })
    .max(50, {
      message: "Amount must be at most 50 characters.",
    }),
  bankAccount: z
    .string()
    .min(3, {
      message: "Account must be at least 3 characters.",
    })
    .max(50, {
      message: "Account must be at most 50 characters.",
    }),
  bankAccountName: z
    .string()
    .min(3, {
      message: "Account name must be at least 3 characters.",
    })
    .max(50, {
      message: "Account name must be at most 50 characters.",
    }),
  bank: z
    .string()
    .min(3, {
      message: "Please enter a valid bank name.",
    })
    .max(50, {
      message: "Please enter a valid bank name.",
    }),
});

const CreatePaymentInputValidation = z.object({
  source_id: z
    .string()
    .min(3, {
      message: "Transaction number must be at least 1 characters.",
    })
    .max(50, {
      message: "Transaction number must be at most 50 characters.",
    }),
  amount: z
    .string()
    .min(1, {
      message: "Amount must be at least 3 characters.",
    })
    .max(50, {
      message: "Amount must be at most 50 characters.",
    }),
});

const UpdateInfoInputValidation = z.object({
  firstName: z
    .string()
    .min(3, {
      message: "First name must be at least 3 characters.",
    })
    .max(50, {
      message: "First name must be at most 50 characters.",
    }),
  lastName: z
    .string()
    .min(3, {
      message: "Last name must be at least 3 characters.",
    })
    .max(50, {
      message: "Last name must be at most 50 characters.",
    }),
  phoneNumber: z
    .string()
    .min(3, {
      message: "Please provide a contact number.",
    })
    .max(50, {
      message: "Please provide a valid contact number",
    }),
  address: z
    .string()
    .min(3, {
      message: "Please provide a address.",
    })
    .max(50, {
      message: "Please provide a valide address.",
    }),
});

export {
  CreateUserInputValidation,
  LoginUserInputValidation,
  CreateOrderInputValidation,
  CreateCashoutInputValidation,
  UpdateInfoInputValidation,
  CreatePaymentInputValidation,
  CreateMeetingInputValidation,
};
