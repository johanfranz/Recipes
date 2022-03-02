
'''dados dos números cuente los dígitos de ambos y me muestre cuál tiene más dígitos'''
def mayorDigitos():
  print("Ingrese el 1er numero: \n")
  numero1=input()
  print("Ingrese el 2do numero: \n")
  numero2=input()
  n1=len(numero1)
  n2=len(numero2)
  if(n1<n2):
    print("El numero con mayor numero de digitos es:\n")
    print(numero2)
  elif(n2<n1):
    print("El numero con mayor numero de digitos es:\n")
    print(numero1)
  else: print("ambos tienen la misma cantidad de digitos")

mayorDigitos()
