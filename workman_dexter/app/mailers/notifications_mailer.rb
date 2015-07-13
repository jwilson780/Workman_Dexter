class NotificationsMailer < ActionMailer::Base
  default from: "jakewilson780@gmail.com"
  default :to => "jakewilson780@gmail.com"

  def new_message(message)
  	@message = message
  	mail(:subject => "Workman Dexter Testing Emails")
  end

end
