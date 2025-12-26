import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactEmailRequest = await req.json();

    console.log("Received contact form submission:", { name, email });

    // Validate required fields
    if (!name || !email || !message) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send notification email to Akshay
    const notificationResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["akshaykumbhar.work129@gmail.com"],
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9;">
            <div style="background: linear-gradient(135deg, #f59e0b 0%, #ea580c 100%); padding: 30px; border-radius: 12px 12px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Message</h1>
            </div>
            <div style="background: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
              <p style="margin: 0 0 20px; color: #333;"><strong>From:</strong> ${name}</p>
              <p style="margin: 0 0 20px; color: #333;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #f59e0b;">${email}</a></p>
              <div style="margin-top: 20px; padding: 20px; background: #f5f5f5; border-radius: 8px; border-left: 4px solid #f59e0b;">
                <p style="margin: 0 0 10px; font-weight: bold; color: #333;">Message:</p>
                <p style="margin: 0; color: #555; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
              </div>
              <p style="margin-top: 30px; color: #888; font-size: 12px;">This email was sent from your portfolio contact form.</p>
            </div>
          </div>
        `,
      }),
    });

    const notificationData = await notificationResponse.json();
    console.log("Notification email response:", notificationData);

    if (!notificationResponse.ok) {
      throw new Error(notificationData.message || "Failed to send notification email");
    }

    // Send confirmation email to the person who submitted the form
    const confirmationResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Akshay Kumbhar <onboarding@resend.dev>",
        to: [email],
        subject: "Thanks for reaching out!",
        html: `
          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9;">
            <div style="background: linear-gradient(135deg, #f59e0b 0%, #ea580c 100%); padding: 30px; border-radius: 12px 12px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">Thank You, ${name}!</h1>
            </div>
            <div style="background: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
              <p style="margin: 0 0 20px; color: #333; font-size: 16px; line-height: 1.6;">
                I've received your message and will get back to you within 24 hours.
              </p>
              <p style="margin: 0 0 20px; color: #333; font-size: 16px; line-height: 1.6;">
                In the meantime, feel free to check out my portfolio or connect with me on social media.
              </p>
              <p style="margin-top: 30px; color: #333; font-size: 16px;">
                Best regards,<br>
                <strong style="color: #f59e0b;">Akshay Kumbhar</strong>
              </p>
            </div>
          </div>
        `,
      }),
    });

    const confirmationData = await confirmationResponse.json();
    console.log("Confirmation email response:", confirmationData);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails sent successfully" 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
