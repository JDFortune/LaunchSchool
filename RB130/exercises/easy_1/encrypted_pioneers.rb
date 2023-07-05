names = "Nqn Ybirynpr
Tenpr Ubccre
Nqryr Tbyqfgvar
Nyna Ghevat
Puneyrf Onoontr
Noqhyynu Zhunzznq ova Zhfn ny-Xujnevmzv
Wbua Ngnanfbss
Ybvf Unvog
Pynhqr Funaaba
Fgrir Wbof
Ovyy Tngrf
Gvz Orearef-Yrr
Fgrir Jbmavnx
Xbaenq Mhfr
Fve Nagbal Ubner
Zneiva Zvafxl
Lhxvuveb Zngfhzbgb
Unllvz Fybavzfxv
Tregehqr Oynapu"

def decrypt(name)
  name.chars.map do |chr|
    case chr
    when 'a'..'m', 'A'..'M' then (chr.ord + 13).chr
    when 'n'..'z', 'N'..'Z' then (chr.ord - 13).chr
    else                      chr
    end
  end.join
end

def rot_13(names)
  names = names.split("\n").map(&:split)

  names.map do |name|
    name.map do |n|
      decrypt(n)
    end.join(' ')
  end.join("\n")
end


puts rot_13(names)

