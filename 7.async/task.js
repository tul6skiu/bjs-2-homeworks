class AlarmClock {
    constructor() {
      this.alarmCollection = []; 
      this.intervalId = null;
    }
  
     addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
          }
      
          const hasExistingAlarm = this.alarmCollection.some(alarm => alarm.time === time);
          if (hasExistingAlarm) {
            console.warn('Уже присутствует звонок на это же время');
          }
      

          this.alarmCollection.push({
            callback,
            time,
            canCall: true
          });
        }

        removeClock(time) {
            if (!time) {
                throw new Error('Необходимо указать время для удаления звонка');
            }

            
            let deleteIndex =  this.alarmCollection.findIndex(alarm => alarm.time === time);
            if (deleteIndex === -1) {
            console.warn('Звонок не найден');
                return;

            }
            this.alarmCollection = this.alarmCollection.filter(
                alarm => alarm.time !== time
              );
            console.log("Звонок на время ${time} был удалён");
        
        }
    
        getCurrentFormattedTime() {
            // Создаем объект текущей даты-времени
            const now = new Date();
            
            // Форматируем часы и минуты с ведущими нулями
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            
            return `${hours}:${minutes}`;
        }

        start() {
            if (this.intervalId !== null) {
                return;
            }

            this.intervalId = setInterval(() => {
                const currentTime = this.getCurrentFormattedTime();

                this.alarmCollection.forEach(alarm => {
                    if (alarm.time === currentTime && alarm.canCall) {
                        alarm.canCall = false;
                        alarm.callback();
                    }
                })
            }, 1000);
        }

        stop() {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }

        resetAllCalls() {
            this.alarmCollection.forEach(alarm => {
                alarm.canCall = true;
            })
        }

        clearAlarms() {
            this.stop();
            this.alarmCollection = [];
        }
    }
    